import MobileNavBar from "./MobileNavBar"

export interface Props {
  children?: JSX.Element[] | JSX.Element
}

const Layout = (props: Props) => {
  return (
    <div>
      <MobileNavBar />
      {props.children}
    </div>
  )
}

export default Layout