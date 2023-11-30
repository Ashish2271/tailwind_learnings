import React from 'react'


const LoginForm = () => {
    return (
        <div>

            <div className="bg-white font-sans">
                {/* Sidebar */}
                <div className="hidden lg:flex flex-col justify-between bg-[#ffe85c] lg:p-8 xl:p-12 lg:max-w-sm xl:max-w-lg">
                    <div className="flex items-center justify-start space-x-3">
                        <span className="bg-black rounded-full w-8 h-8"></span>
                        <a href="/" className="font-medium text-xl">
                            Brand
                        </a>
                    </div>
                    <div className="space-y-5">
                        <h1 className="lg:text-3xl xl:text-5xl xl:leading-snug font-extrabold">
                            Enter your account and discover new experiences
                        </h1>
                        <p className="text-lg">You do not have an account?</p>
                        <button className="inline-block flex-none px-4 py-3 border-2 rounded-lg font-medium border-black bg-black text-white">
                            Create account here
                        </button>
                    </div>
                    <p className="font-medium">© 2022 Company</p>
                </div>

                {/* Login */}
                <div className="flex flex-1 flex-col items-center justify-center px-10 relative">
                    <div className="flex lg:hidden justify-between items-center w-full py-4">
                        <div className="flex items-center justify-start space-x-3">
                            <span className="bg-black rounded-full w-6 h-6"></span>
                            <a href="/" className="font-medium text-lg">
                                Brand
                            </a>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span>Not a member? </span>
                            <a href="/" className="underline font-medium text-[#070eff]">
                                Sign up now
                            </a>
                        </div>
                    </div>

                    {/* Login box */}
                    <div className="flex flex-1 flex-col justify-center space-y-5 max-w-md">
                        <div className="flex flex-col space-y-2 text-center">
                            <h2 className="text-3xl md:text-4xl font-bold">Sign in to account</h2>
                            <p className="text-md md:text-xl">Sign up or log in to place the order, no password required!</p>
                        </div>
                        <div className="flex flex-col max-w-md space-y-5">
                            <input
                                type="text"
                                placeholder="Username"
                                className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
                            />
                            <button className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white">
                                Confirm with email
                            </button>
                            <div className="flex justify-center items-center">
                                <span className="w-full border border-black"></span>
                                <span className="px-4">Or</span>
                                <span className="w-full border border-black"></span>
                            </div>
                            <button className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black relative">
                                <span className="absolute left-4">
                                    <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <path fill="#EA4335" d="M5.26620003,9.76452941 C6.19878754,6.93863203 8.85444915,4.90909091 12,4.90909091 C13.6909091,4.90909091 15.2181818,5.50909091 16.4181818,6.49090909 L19.9090909,3 C17.7818182,1.14545455 15.0545455,0 12,0 C7.27006974,0 3.1977497,2.69829785 1.23999023,6.65002441 L5.26620003,9.76452941 Z" />
                                        <path fill="#34A853" d="M16.0407269,18.0125889 C14.9509167,18.7163016 13.5660892,18.1818182 12,18.1818182 C9.16340909,18.1818182 6.54545455,15.5638636 6.54545455,12 C6.54545455,8.43613636 9.16340909,5.81818182 12,5.81818182 C13.5454545,5.81818182 14.9541818,6.71127273 15.7030278,8.06018864 L18.2893221,5.47389443 C16.6632083,3.50899704 14.3271299,2 12,2 C7.03216039,2 2.90909091,6.37689957 2.90909091,12 C2.90909091,17.6231004 7.03216039,22 12,22 C17.9876364,22 22,17.9867559 22,12 C22,11.3328895 21.9090909,10.6850091 21.7477273,10.0693636 L16.0407269,14.5810221 L16.0407269,14.5810221 Z" />
                                    </svg>
                                </span>
                                <span className="flex-grow text-center">Sign in with Google</span>
                            </button>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <p className="text-center text-sm">Forgot your password?</p>
                            <p className="text-center text-sm">
                                Don't have an account?{' '}
                                <a href="/" className="underline font-medium text-[#070eff]">
                                    Sign up here
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    
        </div>
    )
}

export default LoginForm