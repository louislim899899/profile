import imgErp from "@/assets/images/website/erp.png"
import imgIntender from "@/assets/images/website/intender.png"
import imgEasyfood from "@/assets/images/website/easyfood.png"
import { PhpLogo, PythonLogo, SqlLogo, VueLogo, WordpressLogo } from '@/components/logo/Logo'


const projectMap = new Map<string, any> ([
    // const experienceMap3:WorkExperience[] = [
        // [
        //     "inspiren",
        //     new Map<string, any>([
        //         ["year", "2018-2019"],
        //         ["company", "Inspiren Sdn Bhd"],
        //         ["position", "Front-end developer / Wordpress developer"],
        //         ["description", 
        //             [
        //                 "Worked in high pace environment to complete a wordpress project within 3-4 days in average, without using theme but based on designer's design",
        //                 "Customized plugin using PHP & javascript",
        //                 "Build mainly using css & vanilla javascript, also learned sass",
        //                 "Hosting migration, DNS, domain pointing, and other server maintenance works",
        //                 "Learned Photoshop, Illustrator, Premiere Pro",
        //             ]
        //         ]
        //     ]),
        // ],
        [
            ["img": imgErp],
            ["number": "01"],
            ["name": "Enterprise Resource Planning (ERP)"],
            ["desc": "An internal-use platform for a contractor company."],
            ["features": [
                "Invoice tracking",
                "Item price tracking",
                "Subcontractor management"
            ]],
            ["stack": [
                <VueLogo />,
                <PhpLogo />,
                <SqlLogo />
          ] ],
        ]
    ])

    const projects = [
        {
          img: imgErp,
          number: "01",
          name: "Enterprise Resource Planning (ERP)",
          desc: "An internal-use platform for a contractor company.",
          features: [
            "Invoice tracking",
            "Item price tracking",
            "Subcontractor management"
          ],
          stack: [
            <VueLogo />,
            <PhpLogo />,
            <SqlLogo />
          ] 
        },
        {
          img: imgIntender,
          number: "02",
          name: "Intender",
          desc: "A construction information provider",
          features: [
            "Provide project, company, contact info",
            "Admin dashboard",
            "Automatic data processing"
          ],
          stack: [
            <VueLogo />,
            <PhpLogo />,
            <SqlLogo />,
            <PythonLogo />
          ] 
        },
        {
          img: imgEasyfood,
          number: "03",
          name: "Easyfood",
          desc: "Raw chicken E-commerce",
          features: [
            "Invoice tracking",
            "Item price tracking",
            "Subcontractor management"
          ],
          stack: [
            <WordpressLogo />
          ] 
        },
      ]
    
    export default projectMap