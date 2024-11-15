import Button from "./Button";

const Hero = () => {
    return (
        <section className="dark:bg-gray-100 dark:text-gray-800">
	        <div className="container flex flex-col justify-center xl:p-24 p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
	    	    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
	    		    <h1 className="text-5xl font-bold leading-none sm:text-6xl">Kenalkan
	    			    <span className="dark:text-violet-600"> Bisnis </span>anda secara digital
	    		    </h1>
	    		    <p className="mt-6 mb-8 text-lg sm:mb-12">bersama vite digital solution, 
	    			    <br  className="hidden md:inline lg:hidden" /> kenalkan organisasi anda lebih luas lagi
	    		    </p>
	    		    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
	    		    	<Button link={"https://wa.me/"} label={"Contact Us"} />
	    		    </div>
	    	    </div>
	    	    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
	    	    	<img src="https://mambaui.com/assets/svg/Business_SVG.svg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
	    	    </div>
        	</div>
        </section>
    )
}

export default Hero;