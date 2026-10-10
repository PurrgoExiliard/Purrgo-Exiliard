type CertificatesData = {
    date: Date;
    cert: string;
    given_by: string;
}
type CertificatesProps = {
    dataset: CertificatesData[]
}


function Certificate({date, cert, given_by}: CertificatesData){
    return <>
    <div className="cert">
        <span className="cert_title">
            {cert}
        </span>
        <span className="cert_recieved">
            Recieved : {date.toLocaleDateString()}
        </span>
        <span className="cert_given">Given by : {given_by}</span>
    </div>
    
    </>
}

function Certificates({ dataset }: CertificatesProps) {
    return <>
        <h1 className="title">Certificates</h1>
        <span>None lol</span>
        <div className="cert_container">
            {dataset.map((set, index) => ( <Certificate key={index} date={set.date} cert={set.cert} given_by={set.given_by}/>))} 
        </div>
    </>
}


export default Certificates;