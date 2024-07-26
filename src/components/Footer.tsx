import { FC } from 'react';

import Link from "next/link";

export const Footer: FC = () => {
    return (
        <div className="">
            <footer className="mx-auto  flex flex-row p-2 text-center items-center footer text-neutral-content py-4 bg-black bg-opacity-30">
                <div className="pl-8 text-2xl">
					<div className="gap-4 text-center flex">
						<Link href="https://x.com/voidtokensol">
						<div className="transform transition duration-300 hover:scale-125">
							<a>
								<svg xmlns="http://www.w3.org/2000/svg" className="fill-current" width="24" height="24" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 462.799"><path fill-rule="nonzero" d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z"/></svg>
							</a>
						</div>
						</Link>

						<Link href="/">
							<div className="transform transition duration-300 hover:scale-125">
								<a>
									<svg xmlns="http://www.w3.org/2000/svg" className="fill-current" width="24" height="24" viewBox="0 0 333334 333334" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"><path d="M166667 0c92048 0 166667 74619 166667 166667s-74619 166667-166667 166667S0 258715 0 166667 74619 0 166667 0zm80219 91205l-29735 149919s-4158 10396-15594 5404l-68410-53854s76104-68409 79222-71320c3119-2911 2079-3534 2079-3534 207-3535-5614 0-5614 0l-100846 64043-42002-14140s-6446-2288-7069-7277c-624-4992 7277-7694 7277-7694l166970-65498s13722-6030 13722 3951zm-87637 122889l-27141 24745s-2122 1609-4443 601l5197-45965 26387 20619z"/></svg>
								</a>
							</div>
						</Link>
					</div>
                </div>
				
                <div className="max-w-md mx-auto sm:pl-12 grid-flow-col gap-4 text-center">
					
                </div>
				
				<div className="grid-flow-col gap-4 text-center pr-8 text-2xl">
					<a>of.nothing.\</a>
                </div>
            </footer>
        </div>
    );
};
