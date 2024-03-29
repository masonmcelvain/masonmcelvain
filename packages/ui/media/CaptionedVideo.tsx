type CaptionedVideoProps = React.PropsWithChildren<{
   mp4: string;
   webm: string;
}>;
export function CaptionedVideo({ children, mp4, webm }: CaptionedVideoProps) {
   return (
      <div className="not-prose flex flex-col items-center text-center">
         <div className="flex w-full justify-center">
            <video autoPlay loop playsInline width="768">
               <source src={webm} type="video/webm" />
               <source src={mp4} type="video/mp4" />
               <p>Your browser does not support the video tag 😕</p>
            </video>
         </div>
         {children}
      </div>
   );
}
