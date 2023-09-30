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
            <h1 className="text-5xl font-bold">{title}</h1>
            {children}
         </div>
         <div>
            <MDX />
         </div>
      </>
   );
}
