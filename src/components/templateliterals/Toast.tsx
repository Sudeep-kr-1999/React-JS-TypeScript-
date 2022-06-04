// Position props can be one of 
// "left-center" | "left-top" |"left-bottom"|"center" | "center-top"|"center-bottom"|"right-center"|"right-top"|"right-bottom"


type HorizontalPosition = "left" | "right" | "center";
type VerticalPosition = "top" | "center" | "bottom";
type ToastProps = {
    position: Exclude<`${HorizontalPosition}-${VerticalPosition}`, 'center-center'> | 'center'
}

export const Toast = ({ position }: ToastProps) => {
    return (
        <div>Toast Notification Position - {position}</div>
    )
}

// note:-----------
// Exclude<arg1,arg2> will take a template literal of types or type as argument 1 and the type which we want to exclude
// from the type passed in arg1 as arg2