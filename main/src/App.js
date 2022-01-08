import logo from './logo.svg';
import './App.css';

import Contents from './components/Contents'
import NavBar from './components/NavBar'

//<div class="min-h-screen flex flex-col">
//<header class="p-4 bg-teal-500 text-center text-white font-bold">Header</header>
//<main class="h-64 bg-teal-600 flex items-center flex-grow justify-center text-white">Main</main>
//<footer class="p-4 bg-teal-500 text-center text-white font-bold">Footer</footer>
//</div>


function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="block relative h-20 p-6 bg-zinc-100 text-center text-blue-600 font-bold rounded shadow">
        <div className="flex justify-start align-center content-center  ">
        <h1 className="">Lizard</h1>

        </div>

      </div>
      <div className="h-64 flex bg-purple-400 items-center flex-grow justify-center text-black">
        <div className="bg-zinc-100 w-96 h-96 rounded-md shadow-2xl flex items-center justify-center">
          <div className="">
          <input className="flex mb-12 shadow appearance-none border rounded w-36 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="USDT"/>
          <span className="justify-center items-center mb-12 flex bg-gray-700 
          rounded w-24 ml-6 h-8 text-white hover:bg-gray-900  shadow">
            Convert To
          </span>
          
          <input className="flex shadow appearance-none border  rounded w-36 py-2 px-3 text-gray-700 mb-3 leading-tight 
          focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="TERRA"/>
          <button className="flex justify-center items-center  bg-purple-500 w-36 h-8 rounded mt-12 hover:bg-purple-600 text-white shadow">Connect Wallet</button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
