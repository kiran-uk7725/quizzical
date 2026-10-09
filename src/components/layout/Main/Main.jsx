import { mainStyles } from ".";

export default function Main({children, className='', ...props}){
    const combinedClasses = `${mainStyles.mainBase} ${className}`.trim();
    return(<main className={combinedClasses} {...props}>{children}</main>);
}