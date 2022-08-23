//create component called SignUp
//add managed state to the form. Elements tracked by the state on the component.
//initialize with empty string('')
function SignUp(){
    const [year, setYear] = React.useState('');
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    function handle(){
        console.log('year: ', year);
        console.log('name: ', name);
        console.log('email: ', email);
        console.log('password: ', password);
    }
    //add state to element by adding the value of the element.
        //define the onChange event (e). A function that will set the value.
    return (
        <>
        <select value={year} onChange={e => setYear(e.target.value)}>
            <option>Freshman</option>
            <option>Sophmore</option>
            <option>Junior</option>
            <option>Senior</option>
        </select>
        <div>Name</div>
        <input type="text" value={name} onChange={e => setName(e.target.value)}/>
        <div>Email</div>
        <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
        <div>Password</div>
        <input type="text" value={password} onChange={e => setPassword(e.target.value)}/>
        <div><input type="checkbox"/>Remember me</div>
        <button onClick={handle}>Submit</button>
        </>
    )
}

//ReactDOM.render to add ellement to the page and target HTML element 'root'
ReactDOM.render(
    <SignUp/>,
    document.getElementById('root')
)