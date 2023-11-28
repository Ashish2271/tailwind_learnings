// Import necessary Clerk and Firebase functions
import { useUser } from "@clerk/clerk-react";
import { useState } from "react";
import { getDatabase, ref, set } from "firebase/database";

// Your component...
function RegistrationForm() {
  const [name, setName] = useState("");
  const { isSignedIn, user } = useUser();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // Ensure the user is authenticated with Clerk
      if (!isSignedIn) {
        console.error("User not authenticated with Clerk.");
        return;
      }

      // Store additional details in Firebase Realtime Database
      const db = getDatabase();
      const userRef = ref(db, `users/${user.id}`);

      // Customize this structure based on your form fields
      const userData = {
        email: user.primaryEmailAddress.emailAddress,
        name: name || `${user.firstName} ${user.lastName}`, // Use entered name or Clerk's first and last name
        imageUrl: user.imageUrl,
        // Add other form fields as needed
      };

      await set(userRef, userData);

      // Reset form fields after successful registration
      setName("");

      console.log("User details stored in Firebase successfully!");
    } catch (error) {
      console.error("Error storing user details:", error.message);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <button type="submit">Save Details</button>
    </form>
  );
}

export default RegistrationForm;
