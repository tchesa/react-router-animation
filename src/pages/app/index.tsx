import Layout, { Content, Header } from "antd/lib/layout/layout"
import { AnimatePresence } from "framer-motion"
import { NavLink, Redirect, Route, Switch, useHistory, useLocation, useRouteMatch } from "react-router-dom"
import DashboardPage from "./dashboard"
import SettingsPage from "./settings"
import './app.css'

const Router = () => {
  const { path, url } = useRouteMatch()
  const location = useLocation()
  const rootLocation = location.pathname.split('/')[2]
  const { action } = useHistory()

  return (
    <AnimatePresence custom={action}>
      <Switch key={rootLocation} location={location}>
        <Route exact path={path}>
          <DashboardPage />
        </Route>
        <Route path={`${path}/dashboard`}>
          <DashboardPage />
        </Route>
        <Route path={`${path}/settings`}>
          <SettingsPage />
        </Route>
        <Route>
          <Redirect to={url} />
        </Route>
      </Switch>
    </AnimatePresence>
  )
}

const App = () => {
  return (
    <Layout className="app-page">
      <Header className="app-header">
        <NavLink to="/app/dashboard">Dashboard</NavLink>
        <NavLink to="/app/settings">Settings</NavLink>
      </Header>
      <Content className="app-content">
        <Router />
      </Content>
    </Layout>
  )
}

export default App
