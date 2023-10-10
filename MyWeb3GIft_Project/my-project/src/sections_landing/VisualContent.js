
const VisualContent = () => {

const background_image= {
  backgroundImage: "url('https://images.unsplash.com/photo-1524673278499-6c651bf78b14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')" ,
   height: '400px',
};

const overlayStyle = {
  // backgroundColor: 'rgba(0, 0, 0, 0.6)',
};


  return (
    <div>
      
      {/* VisualContent */}




<div
  className=" bg-fixed relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center"
 style={background_image} >
  <div
    className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
   style={overlayStyle}>
    <div className="flex h-full items-center justify-center">
      <div className="text-white">
        <h2 className="mb-4 text-4xl font-semibold">Heading</h2>
        <h4 className="mb-6 text-xl font-semibold">Subheading</h4>
        <button
          type="button"
          className="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
          data-te-ripple-init
          data-te-ripple-color="light">
          Call to action
        </button>
      </div>
    </div>
  </div>
</div>


    </div>
  )
}

export default VisualContent