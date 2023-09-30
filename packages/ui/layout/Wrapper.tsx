export function Wrapper({ children }: React.PropsWithChildren) {
   return (
      <div className="mx-auto mt-8 w-full px-4 sm:px-6 md:mt-16 lg:w-[60rem] lg:px-0 xl:w-[68.75rem]">
         {children}
      </div>
   );
}
