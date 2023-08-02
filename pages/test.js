

import Layout from "../components/Layout"

function Test()
{
    return <Layout         mainTitle="My Home Page built with Next JS"
    footer={`Copyright ${new Date().getFullYear()}`}>

<div class="row ">
                        <div class="col-lg-12 " >
                            <div class="h-100 d-flex flex-column justify-content-center p-5">
                                <h1 class="mb-4">Who We Are</h1>
                                <h4 class="mb-4">We Create Something New</h4>
                                <p class="mb-4">Ragersville is a unique pre school chain ventured by Ragersville Learning and Accessories Pvt. Ltd. ,an organization pioneer in education. The organization is managed by a team of highly qualified, dedicated and experienced educationists and professionals who have taken initiative in making Ragersville a dream place for little champs. We believe that children need a safe,clean and hygienic environment in which they can grow them-self.
                                </p>

                                <p class="mb-4">As the name goes, RAGERSVILLE prepares the child for a full school by providing the right environment for the child to make its transition. “We started in Delhi-NCR with the simple goal of making the lives of families with young children better and easier. By offering high-quality studies along with music, art, and enrichment classes and a variety of services all under one roof.
                                </p>

                                <a class="btn btn-primary py-3 px-5" href="">Get Started Now<i class="fa fa-arrow-right ms-2"></i></a>
                            </div>
                        </div>
                    </div>


    
    </Layout>
}

export default Test