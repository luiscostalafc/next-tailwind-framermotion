import Header from './Header'

const Layout: React.FC = ({ children }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-">
      <Header />
      {children}
    </div>
  )
}


export default Layout;