type ProjectTemplateProps = React.PropsWithChildren<{
   title: string;
   MDX: React.FC;
}>;
export function ProjectTemplate({
   children,
   title,
   MDX,
}: ProjectTemplateProps) {
   return (
      <>
         <div className="flex items-center justify-start space-x-8">
            <h1>{title}</h1>
            {children}
         </div>
         <div>
            <MDX />
         </div>
      </>
   );
}
