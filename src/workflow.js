/*
########Project initialization########
1.npx create react app
2.npm install firebase
3.create firebase.init.js and copy paste
4.import getAuth from '/firebase/auth'
5.const auth =getAuth(app)
6.export default auth

#######React Router Setup#######
1.installation>npm install react-router-dom@6
2. <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode></BrowserRouter>
    in index.js
3.Create route in app.js
<Routes>
        <Route path='/' element={}></Route>
      </Routes>

######Coding Part#####
1.Create Pages folder in src under this create Home,About,Shared and login folders

2.Under the Shared folder create header and footer folder.

3.Create services folder under home.

4.Create Home folder under Home folder

5.As we want to header and footer on every page so will place this components outside the routes according to their position like header will be before routes and footer will be after routes

6.import services compo inside the home

7.create fake data on public folder (services.json)

8.fetch data on services by useState and useEffect because we want to show every services on the services page

9.Dependicy on useEffect:
if we put a empty array on this the data will only load one time and if we put various dependices the data will change according to the changes of any dependicy

10.Create service folder under the big home for every single service

11.on the services page we will map the single service and for every single service we will call the service compo
in the compo we will send product id as key and all details about service by service={service}

12.on the service compo we will collect data by this
`
const Service = ({service}) => {
    const{name,img,description,price}=service
`
here we are sending {service} as props and reciving name,img,description,price by destructuring the service object

13.services page a shob data fetch korsi karon ai page a shob service dhekabo and map kore protiti service er data service compo te patabo jate single service k kivabe dhekabo the code korte pari.

14.here we are showing details of each service on services page so we will do responsiveness work on services.css

15.but if we want add style to each service we will have do that on service.css

16.Create experts and expert under big home

17.create fake data on experts and import images for data

18.import experts compo inside the home

19.on the experts page we will map the single expert and for every single expert we will call the expert compo
in the compo we will send expert id as key and all details about expert by expert={expert}

20.on the expert compo we will collect data by this
`
const Expert = ({expert}) => {
    const{name,img}=expert
`
21.Copy bootstrap css link and paste it on index.html 

22.install react bootstrap to create slider and make slider compo and call it on home page

23.For footer &copy; will get the c sign and {new Date().getUTCFullYear()} to get the current year

24.<Navbar.Brand as={Link} to="/"><img src={logo}  height={30} alt="" /></Navbar.Brand> the "as" will prevent the page not to load.

25.Creat serviceDetail page under the page to show details about the services

####### why we are doing dynamic routes???
====>>>> when user will click on a specific service book btn we want to redirect him to the serviceDetail page and on this page we will show him the details of the services.Each services will have different details but on the same page (ServiceDetail) we can do it by having the URL params as the id of the service and show them different details on different service 

26.Setting up dynamic route for serviceDetail component
 <Route path='/service/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route> {on app.js}
 :serviceID will work like this ==http://localhost:3000/service/anything
 anything after service/ will land user to the service detail page
:serviceID this work as an URL params

27.if we click the book button on service card we want to navigate user to serviceDetails page
const navigate =useNavigate();
    const navigateServiceDetail = id =>{
        navigate(`/service/${id}`);
      <button onClick={()=>{navigateServiceDetail(id)}} className="btn btn-primary">Book:{name}</button>
      for that we will write this code on service compo
      /service/${id} this will navigate to the exact service the user have clicked cause it has a parameter called id which is different for each service

28.To track from which service card the user has landed to serviceDetail we have to use useParams() in serviceDetail page
          const {serviceId}=useParams;
          we have to destrucetrd the URL param in this case (serviceId)


29.Creating not found page
 
30.Creating login under login and creating register under log in

31.Copy a login from form react bootstrap and paste it on login.js

32.what is useRef??
==>> UseRef is a hook that returns a mutable reference object.
We will use useRef to collect the email and login

33.const Login = () => {
    const EmailRef = useRef("");
    const PassRef =useRef("");

     const handleSubmit =event =>{
        event.preventDefault();
        const email=EmailRef.current.value;
        const password =PassRef.current.value;}

      <Form onSubmit={handleSubmit}>

this code will get the email,password from the user

34.create register from in register compo

35.Protecting Firebase.init.js==>>

36.npm install --save react-firebase-hooks

37.const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
  on register page

  38.  const handleRegister =event=>{
        event.preventDefault();
        const name =event.target.name.value;
        const email =event.target.email.value;
        const password =event.target.password.value;
        createUserWithEmailAndPassword(email,password)

    }on register page

39.create requireAuth under big login
const auth =getAuth(app)
const ReqireAuth = ({children}) => {
    const [user, loading, error] = useAuthState(auth);

40. const [user] = useAuthState(auth);
    const location =useLocation();
    if(!auth){
        return   <Navigate to="/login" state={{ from: location }} replace />
    }
    return children;


41.Google Sign in method 
1.add a new provider(google) on authentication
2.search react firebase hook and go to gitHub link
and copy paste this "const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);"





*/