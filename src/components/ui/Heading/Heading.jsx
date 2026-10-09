import {headingStyles} from '@/ui/Heading';

export default function Heading({level=1, children, className='', ...props}){
    const tag = `h${level}`;
    const Components = tag;
    const combinedClasses = `${headingStyles.headingBase} ${headingStyles[tag]} ${className}`.trim();
    return(<Components className={combinedClasses} {...props}>{children}</Components>);
}