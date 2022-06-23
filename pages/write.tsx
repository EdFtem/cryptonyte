import type { NextPage } from 'next'
import TextEditor from '../components/TexEditor'

import Layout from '../components/Layout'

const WritePage: NextPage = () => {
  return (
    <Layout>
      <TextEditor/>
    </Layout>
  )
}

export default WritePage