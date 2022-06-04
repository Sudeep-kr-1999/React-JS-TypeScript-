
type ButtonProps = {
    variant: 'primary' | 'secondary'
    children: string
} & Omit<React.ComponentProps<'button'>, 'children'>
export const CustomButton = ({ variant, children, ...rest }: ButtonProps) => {
    return (
        <button className={`class-with-${variant}`} {...rest}>{children}</button>
    )
}


// note:------ (vvi)
// Omit<arg1,arg2> will take type in argument 1 and the type which we want to remove from the given type
// in argument 1 as a second argument 