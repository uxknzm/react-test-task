import React from 'react';
import { useSelector } from 'react-redux'
import type { RootState } from '../../redux/store'
import { Route, Routes, Navigate } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../../routes';
import { HOME_ROUTE, LOGIN_ROUTE } from '../../utils/const';



const AppRouter = () => {
    const isAuth = useSelector((state: RootState) => state.user.isAuth)
    return isAuth ?
        (
            <Routes>
                {privateRoutes.map(({ path, Component }) =>
                    <Route key={path} path={path} element={<Component />} />
                )}
                <Route path="*" element={<Navigate to={HOME_ROUTE} />} />
            </Routes>
        )
        :
        (
            <Routes>
                {publicRoutes.map(({ path, Component }) =>
                    <Route key={path} path={path} element={<Component />} />
                )}
                <Route path="*" element={<Navigate to={LOGIN_ROUTE} />} />
            </Routes>
        )
};

export default AppRouter;