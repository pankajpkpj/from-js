const onBlur = () => {

    let Duname = document.getElementById("Duname");
    let Pass = document.getElementById("Pass");
    let Ques = document.getElementById("Ques");
    let Ans = document.getElementById("Ans");
    let Nam = document.getElementById("Nam");
    let Gen = document.getElementById("Gen");
    let Ag = document.getElementById("Ag");
    let Loc = document.getElementById("Loc");
    let Zcode = document.getElementById("Zcode");
    let Ar = document.getElementById("Ar");
    let Paddress = document.getElementById("Paddress");
    let Cno = document.getElementById("Cno");
    let Eaddress = document.getElementById("Eaddress");
    let Uphoto = document.getElementById("Uphoto");
    console.log(Ar.value);
    if (Duname.value.length < 20 && /[^A-Za-z0-9]/.test(Duname.value)) {
        console.log("hello", /[^A-Za-z0-9]/.test(Duname.value));
        console.log(Duname.value);
        Duname.style.border = "1px solid green";
    }
    if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/.test(Pass.value))
        console.log(Pass);
    if (/[A-Za-z ]+/.test(Nam.value)) 
        console.log(Nam);
    if(/^\d{6}/.test.Zcode)
        console.log(Zcode);
    if(/[A-Za-z0-9\s]+/.test(Ar.value))
    console.log(Ar);
    if(Cno.value.length == 10 && Cno.value.length !=" " && Cno.value.length.typeOf(Cno) !="Number")
        console.log(Cno)
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Eaddress.value))
    console.log(Eaddress)
    if(/[^\\s]+(.*?)\\.(jpg|jpeg|png|gif|JPG|JPEG|PNG|GIF)$/.test(Uphoto.value))
    console.log(Uphoto);
}

