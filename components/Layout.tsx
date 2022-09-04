import { MDXProvider } from '@mdx-js/react'

const Layout = ({ children, meta }: any) => {
    return (<MDXProvider><div className="prose lg:prose-xl">
        {JSON.stringify(meta)}
        {children}</div>
    </MDXProvider>)
}

export default Layout