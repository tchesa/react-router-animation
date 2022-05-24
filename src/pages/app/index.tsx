import Layout, { Content, Header } from "antd/lib/layout/layout"
import { AnimatePresence } from "framer-motion"
import { NavLink, Redirect, Route, Switch, useHistory, useLocation, useRouteMatch } from "react-router-dom"
import DashboardPage from "./dashboard"
import SettingsPage from "./settings"
import './app.css'
import { LeftOutlined } from "@ant-design/icons"

const Router = () => {
  const { path, url } = useRouteMatch()
  const location = useLocation()
  const rootLocation = location.pathname.split('/')[2]

  return (
    <AnimatePresence exitBeforeEnter presenceAffectsLayout>
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
  const history = useHistory()

  return (
    <Layout className="app-page">
      <Header className="app-header">
        <button className="back-button" onClick={history.goBack}>
          <LeftOutlined />
        </button>
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
