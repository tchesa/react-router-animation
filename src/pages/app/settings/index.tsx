import { Layout } from "antd"
import { NavLink, Route, Switch, useRouteMatch } from "react-router-dom"
import AnimatedPage from "../../../components/animated-page"
import NotificationsPage from "./notifications"
import PreferencesPage from "./preferences"
import ProfilePage from "./profile"

const SettingsPage = () => {
  const { path, url } = useRouteMatch()
  const { Sider, Content } = Layout;

  return (
    <AnimatedPage>
      <Layout>
        <Sider>
          <ul>
            <li>
              <NavLink to={`${url}/profile`}>Profile</NavLink>
            </li>
            <li>
              <NavLink to={`${url}/preferences`}>Preferences</NavLink>
            </li>
            <li>
              <NavLink to={`${url}/notifications`}>Notifications</NavLink>
            </li>
          </ul>
        </Sider>
        <Content>
          <Switch>
            <Route exact path={`${path}/profile`}>
              <ProfilePage />
            </Route>
            <Route exact path={`${path}/preferences`}>
              <PreferencesPage />
            </Route>
            <Route exact path={`${path}/notifications`}>
              <NotificationsPage />
            </Route>
          </Switch>
        </Content>
      </Layout>
    </AnimatedPage>
  )
}

export default SettingsPage
