(this["webpackJsonpreact-employee-directory"]=this["webpackJsonpreact-employee-directory"]||[]).push([[0],[,,,,function(e,t,a){e.exports=a.p+"static/media/company_logo.d8643511.png"},function(e){e.exports=JSON.parse('[{"id":1,"image":"https://gitlabcommitvirtual.com/wp-content/uploads/2020/06/person-dummy-e1553259379744.jpg","name":"Mary Kate","department":"Sales","email":"marykate@email.com","phone":"703-234-3333"},{"id":2,"image":"https://gitlabcommitvirtual.com/wp-content/uploads/2020/06/person-dummy-e1553259379744.jpg","name":"John Shou","department":"Engineering","email":"John@email.com","phone":"503-234-1123"},{"id":3,"image":"https://gitlabcommitvirtual.com/wp-content/uploads/2020/06/person-dummy-e1553259379744.jpg","name":"Emma Wason","department":"Design","email":"emma@email.com","phone":"394-342-4422"},{"id":4,"image":"https://gitlabcommitvirtual.com/wp-content/uploads/2020/06/person-dummy-e1553259379744.jpg","name":"Tyler Husband","department":"Engineering","email":"tyler@email.com","phone":"333-234-2333"},{"id":5,"image":"https://gitlabcommitvirtual.com/wp-content/uploads/2020/06/person-dummy-e1553259379744.jpg","name":"Mike Docett","department":"Marketing","email":"mike@email.com","phone":"704-345-3453"},{"id":6,"image":"https://gitlabcommitvirtual.com/wp-content/uploads/2020/06/person-dummy-e1553259379744.jpg","name":"Ridden Zhang","department":"Management","email":"ridden@email.com","phone":"495-345-3453"},{"id":7,"image":"https://gitlabcommitvirtual.com/wp-content/uploads/2020/06/person-dummy-e1553259379744.jpg","name":"Liz Chen","department":"Management","email":"Liz@email.com","phone":"703-234-2342"},{"id":8,"image":"https://gitlabcommitvirtual.com/wp-content/uploads/2020/06/person-dummy-e1553259379744.jpg","name":"Melody Chen","department":"Marketing","email":"melody@email.com","phone":"500-234-2342"},{"id":9,"image":"https://gitlabcommitvirtual.com/wp-content/uploads/2020/06/person-dummy-e1553259379744.jpg","name":"Jessic Wang","department":"Sales","email":"jessica@email.com","phone":"503-234-2342"},{"id":10,"image":"https://gitlabcommitvirtual.com/wp-content/uploads/2020/06/person-dummy-e1553259379744.jpg","name":"Lily baker","department":"Engineering","email":"lily@email.com","phone":"503-234-2342"},{"id":11,"image":"https://gitlabcommitvirtual.com/wp-content/uploads/2020/06/person-dummy-e1553259379744.jpg","name":"May Lian","department":"Admin","email":"may@email.com","phone":"703-234-2342"},{"id":12,"image":"https://gitlabcommitvirtual.com/wp-content/uploads/2020/06/person-dummy-e1553259379744.jpg","name":"Chunk Rober","department":"Design","email":"chunk@email.com","phone":"503-234-4444"},{"id":13,"image":"https://gitlabcommitvirtual.com/wp-content/uploads/2020/06/person-dummy-e1553259379744.jpg","name":"Danna Zhang","department":"Engineering","email":"danna@email.com","phone":"503-234-2342"},{"id":14,"image":"https://gitlabcommitvirtual.com/wp-content/uploads/2020/06/person-dummy-e1553259379744.jpg","name":"Eawadro Rasmy","department":"Engineering","email":"mike@email.com","phone":"703-234-2222"},{"id":15,"image":"https://gitlabcommitvirtual.com/wp-content/uploads/2020/06/person-dummy-e1553259379744.jpg","name":"Frank Yang","department":"Management","email":"frank@email.com","phone":"703-234-2222"},{"id":16,"image":"https://gitlabcommitvirtual.com/wp-content/uploads/2020/06/person-dummy-e1553259379744.jpg","name":"Gabbi Tonny","department":"Sales","email":"gabbi@email.com","phone":"703-234-2342"}]')},function(e,t,a){e.exports=a(12)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),m=a.n(n),o=a(3),r=a.n(o),l=(a(11),a(1));var i=function(e){return m.a.createElement("div",{className:"container max-w-6xl px-10 mx-auto"},e.children)},c=a(4),p=a.n(c);var s=function(){return m.a.createElement("div",{className:"bg-white shadow text-gray-800"},m.a.createElement("header",{className:"container max-w-6xl px-10 py-3 mx-auto flex justify-between items-center"},m.a.createElement("div",{className:"flex items-center"},m.a.createElement("img",{className:"mr-3",src:p.a,alt:"Company Logo"}),m.a.createElement("h1",{className:"font-bold"},"Global Solution"))))};var d=function(e){var t=e.onSearch,a=e.searchTerm,n=e.handleSortByName,o=e.handleSortByDept;return m.a.createElement("div",{className:"md:flex justify-between my-6"},m.a.createElement("div",{className:"md:mb-0 mb-4"},m.a.createElement("button",{onClick:n,className:"bg-white focus:bg-yellow-500 focus:text-white focus:outline-none shadow font-bold text-gray-800 rounded px-8 py-1 mr-4 hover:bg-yellow-500 hover:text-white"},"Name"),m.a.createElement("button",{onClick:o,className:"bg-white focus:bg-yellow-500 focus:text-white focus:outline-none shadow font-bold text-gray-800 rounded px-8 py-1 hover:bg-yellow-500 hover:text-white"},"Dept")),m.a.createElement("form",null,m.a.createElement("input",{value:a,onChange:t,className:"shadow pl-5 rounded w-full py-1",type:"text",placeholder:"search employee"})))};var u=function(e){var t=e.name,a=e.image,n=e.dept,o=e.email,r=e.phone;return m.a.createElement("div",{className:"md:flex bg-white shadow text-gray-800 my-4 py-4 px-10 rounded-md items-center justify-between hover:bg-gray-300"},m.a.createElement("img",{style:{maxWidth:"60px"},className:"rounded-full shadow-md border border-gray-300",src:a,alt:"employee"}),m.a.createElement("p",{className:"font-bold text-md"},t),m.a.createElement("p",null,n),m.a.createElement("p",{className:"text-blue-500"},o),m.a.createElement("p",null,r))};var g=function(e){return e.data.map((function(e){return m.a.createElement(u,{key:e.id,image:e.image,name:e.name,dept:e.department,phone:e.phone,email:e.email})}))};var h=function(){return m.a.createElement("div",{className:"m-10 text-sm text-center text-gray-500"},m.a.createElement("p",null,"Created by ",m.a.createElement("a",{href:"https://github.com/Venus1001/Employee-Directory.git",className:"font-bold text-gray-600 hover:text-yellow-500"},"Venus Hu")))},y=a(5);var b=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],o=t[1],r=Object(n.useState)(!1),c=Object(l.a)(r,2),p=c[0],u=c[1],b=Object(n.useState)(y),f=Object(l.a)(b,2),w=f[0],v=f[1],E=w.filter((function(e){return e.name.toLowerCase().startsWith(a.toLowerCase())}));return m.a.createElement("div",null,m.a.createElement(s,null),m.a.createElement(i,null,m.a.createElement("h1",{className:"title text-5xl text-gray-800 mt-16"},"Employee Directory"),m.a.createElement("p",{className:"mb-16 text-md"},"Search for an employee or sort by Name or Category."),m.a.createElement(d,{onSearch:function(e){o(e.target.value)},searchTerm:a,handleSortByName:function(){p?(v(w.sort((function(e,t){return e.name>t.name?-1:1}))),u(!1)):(v(w.sort((function(e,t){return e.name>t.name?1:-1}))),u(!0))},handleSortByDept:function(){p?(v(w.sort((function(e,t){return e.department>t.department?-1:1}))),u(!1)):(v(w.sort((function(e,t){return e.department>t.department?1:-1}))),u(!0))}}),m.a.createElement(g,{data:E}),m.a.createElement(h,null)))};r.a.render(m.a.createElement(m.a.StrictMode,null,m.a.createElement(b,null)),document.getElementById("root"))}],[[6,1,2]]]);
//# sourceMappingURL=main.279dd08c.chunk.js.map