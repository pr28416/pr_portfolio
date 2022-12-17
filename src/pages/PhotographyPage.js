import React from 'react'
import Gallery from 'react-photo-gallery'
import PageBanner from '../components/PageBanner'
import PageNavCtrl from '../components/PageNavCtrl'

export default function PhotographyPage() {

    const photos = [        
        { height: 9, width: 16, src: "https://drive.google.com/uc?expert=view&id=1-MAaJSv2ejiq2_R7KH9g9-Cje9dGZw59" },
        { height: 533, width: 800, src: "https://drive.google.com/uc?expert=view&id=1-JgE-ychfOHjUzSB9KsWXtIrW87CJpCo", },
        { height: 9, width: 16, src: "https://drive.google.com/uc?expert=view&id=1-EsMdw12Jp24xNGi3dM8Ms_hvOyBkoAc", },
        { height: 533, width: 800, src: "https://drive.google.com/uc?expert=view&id=1-UCdRK7vi1j3o4QVBT2UJ0qj4ZYm8R9d", },
        { height: 533, width: 800, src: "https://drive.google.com/uc?expert=view&id=1-RZZSrG96cuuNpxgqEiMJ-725y9LDajQ", },
        { height: 9, width: 16, src: "https://drive.google.com/uc?expert=view&id=1-J52iNAv6aOHJtgk6oaWMsoaLp3CRptc", },
        { height: 9, width: 16, src: "https://drive.google.com/uc?expert=view&id=1-IjR_PcpDRWTN6k-ZpqcTZCXxHP4tQYa", },
        { height: 3, width: 4, src: "https://drive.google.com/uc?expert=view&id=1-XMoRx_5lc8zUsc_xsnDezH22Lmu1vGd", },
        { height: 9, width: 16, src: "https://drive.google.com/uc?expert=view&id=1-dHQmO-Gyv7ZRKskY8AzHRJLHwBjSt6k", },
        { height: 3, width: 4, src: "https://drive.google.com/uc?expert=view&id=1-yvCAbXFA-IuImOktF-KiksDQff_QhlB", },
        { height: 1, width: 1, src: "https://drive.google.com/uc?expert=view&id=1-yomIpE-jNM-dVJfyFuAEsElsLyA09PG", },
        { height: 3, width: 4, src: "https://drive.google.com/uc?expert=view&id=1-rKB4rujlVrnwRvbO4g3QBPyGLTGTVnh", },
        { height: 9, width: 16, src: "https://drive.google.com/uc?expert=view&id=1-rnVNUz6TclNgFjsaorfcI8mANvmuhG2", },
        { height: 4, width: 3, src: "https://drive.google.com/uc?expert=view&id=1-q4ldEiQf50AF3DlfqmD_FLwxhPuFgpS", },
        { height: 4, width: 3, src: "https://drive.google.com/uc?expert=view&id=1-pna9QVUBrhwMEATBUUXM-jAxtqZ3WKl", },
        { height: 3, width: 4, src: "https://drive.google.com/uc?expert=view&id=1-bsF7PsPcm-yNFnrhYRIBBaxyCpdEDpR", },
    ]
    
    return (
        <PageNavCtrl content={(
            <div id="PhotographyPageCtr">
                <PageBanner title="Photography" description="In my free time, I enjoy taking pictures with my iPhone and Canon T3i Rebel DSLR camera, and I want to learn more about the pre- and post-production techniques that compose the essence of photography. Below are some photos that I have captured over the past few months." />
                <div style={{ marginTop: "18px" }}>
                    <Gallery photos={photos} />
                </div>
            </div>
        )} />
    )
}
