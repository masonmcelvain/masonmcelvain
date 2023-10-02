export default function CodeLayout({ children }: React.PropsWithChildren) {
   return (
      <div className="flex flex-col items-start space-y-8 md:mt-16">
         {children}
      </div>
   );
}
