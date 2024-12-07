export default function Ternary(){
    let a:boolean = true;
    let b:boolean = false;
    return(
        <div id="ternary-wrapper" data-thing="czyta pan to faktycznie?">
            {a?<div>a jest prawdziwe</div>:<div>a jest fałszywe</div>}
            {b?<div>b jest prawdziwe</div>:<div>b jest fałszywe</div>}
        </div>
    )

}