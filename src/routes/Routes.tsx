import { useEffect, useRef } from 'react'
import { Route, Routes as AppRoutes, useLocation } from 'react-router-dom'
import NotFound from '../components/NotFound'
import About from '../pages/About'
import Blog from '../pages/Blog'
import Home from '../pages/Home'
import Read from '../pages/Read'
import Work from '../pages/Work'


const Routes = () => {
    const refContact = useRef<HTMLDivElement>(null);
    const { pathname } = useLocation();
    useEffect(() => {
        const top = (pathname === "/contact" && refContact.current) ? refContact.current.offsetTop + 50 : 0;
        window.scrollTo(0, top);
    }, [pathname]);

    return (
        <AppRoutes>
            <Route index path='/' element={<Home />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/about' element={<About />} />
            <Route path='/work' element={<Work ref={refContact} />} />
            <Route path='/contact' element={<Work ref={refContact} />} />
            <Route path='/read/:id' element={<Read />} />
            <Route path='*' element={<NotFound />} />
        </AppRoutes>
    )
}

export default Routes