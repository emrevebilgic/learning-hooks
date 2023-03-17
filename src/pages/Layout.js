import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <div className="page-header">
                Learning React Hooks...
            </div>
            <div className='row'>
                <div className='col-sm-3'>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/use-state">
                                    <button className='btn btn-primary btn-block'>State Hook</button>
                                </Link>
                            </li>
                            <li>
                                <Link to="/use-effect">
                                    <button className='btn btn-primary btn-block'>Effect Hook</button>
                                </Link>
                            </li>
                            <li>
                                <Link to="/use-context">
                                    <button className='btn btn-primary btn-block'>Context Hook</button>
                                </Link>
                            </li>
                            <li>
                                <Link to="/use-ref">
                                    <button className='btn btn-primary btn-block'>Ref Hook</button>
                                </Link>
                            </li>
                            <li>
                                <Link to="/use-reducer">
                                    <button className='btn btn-primary btn-block'>Reducer Hook</button>
                                </Link>
                            </li>
                            <li>
                                <Link to="/use-callback">
                                    <button className='btn btn-primary btn-block'>Callback Hook</button>
                                </Link>
                            </li>
                            <li>
                                <Link to="/use-memo">
                                    <button className='btn btn-primary btn-block'>Memo Hook</button>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className='col-sm-6' style={{borderLeft:"1px solid lightgrey", padding:"0 2rem 0 2rem"}}>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Layout;