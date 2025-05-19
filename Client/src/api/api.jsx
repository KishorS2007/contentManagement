// className - Get
export const GetCLassName = async()=>{
    try{
        const res = await fetch('http://localhost:8000/class-name');
        if(!res.ok){
            throw new Error('http error');
        }
        const data = await res.json();
        // console.log(data);
        return data;
    }
    catch(e){
        console.log(e)
    }
}

// subjectName -get
export const GetSubjectName = async()=>{
    try{
        const res = await fetch("http://localhost:8000/class-name/subject-name");
        if(!res.ok){
            throw new Error("http error");
        }
        const data = await res.json();
        // console.log(data);
        return data;
    }
    catch(e){
        console.log(e)
    }
}