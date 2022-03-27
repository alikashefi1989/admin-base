import React, { useEffect, useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';
import { ReduxStoreModel } from '../../models/state-management/redux/reduxStore.model';
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Login from '../../pages/login/Login';
import Dashboard from '../../pages/dashboard/Dashboard';
import ValidationGate from '../../authorization/validationGate';
import { UserEntityModel } from '../../models/entities/user.model';
import { BROAD_CAST_CHANNEL } from '../../enums/broadCastChannel.enum';
import { APP_ROUTES } from '../../enums/appRoutes.enum';

function App() {

  const navigate = useNavigate();
  const location = useLocation();
  const token: string | null = useSelector<ReduxStoreModel, ReduxStoreModel['token']>((store: ReduxStoreModel) => store.token);
  const user: UserEntityModel | null = useSelector<ReduxStoreModel, ReduxStoreModel["user"]>((store: ReduxStoreModel) => store.user);
  const origin: string = window.location.origin || 'APP_WINDOW_LOCATION_ORIGIN';

  useLayoutEffect(() => {
    let receiverChannel = new BroadcastChannel(origin);
    receiverChannel.addEventListener('message', function (event: any) {
      if (event.data === BROAD_CAST_CHANNEL.RELOAD) {
        navigate(APP_ROUTES.LOGIN);
      }
    });
    if ((token === null || user === null) && location.pathname !== APP_ROUTES.LOGIN) {
      let senderChannel = new BroadcastChannel(origin);
      navigate(APP_ROUTES.LOGIN);
      senderChannel.postMessage(BROAD_CAST_CHANNEL.RELOAD);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  useEffect(() => {
    if ((token === null || user === null) && location.pathname !== APP_ROUTES.LOGIN) {
      let senderChannel = new BroadcastChannel(origin);
      navigate(APP_ROUTES.LOGIN);
      senderChannel.postMessage(BROAD_CAST_CHANNEL.RELOAD);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, token, user]);

  return (
    <>
      <Routes>
        <Route path={APP_ROUTES.LOGIN} element={<Login />} />
        <Route path={APP_ROUTES.DASHBOARD} element={ValidationGate(<Dashboard />)} />
        <Route path={APP_ROUTES.NOT_FOUND} element={<div>404</div>} />
      </Routes>
    </>
  )
}

export default App