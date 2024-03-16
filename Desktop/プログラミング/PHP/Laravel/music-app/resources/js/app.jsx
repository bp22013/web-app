/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

import './bootstrap';

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */



import NavBar from './components/NavBar'; //追加(外部からインポート)

import Home from './components/Home'; //追加(外部からインポート)

import About from './components/About'; //追加(外部からインポート)

import Footer from './components/Footer';

import ReactDOM from "react-dom/client";
import { render } from 'react-dom';

import { BrowserRouter, Routes, Route } from 'react-router-dom'; //追加(ルーター読み込み)


const root = ReactDOM.createRoot(document.getElementById("app"));

root.render(

<>

<BrowserRouter>

<NavBar />

    <Routes>

        <div>
            <Footer />
        </div>

    </Routes>

</BrowserRouter>

</>

);


