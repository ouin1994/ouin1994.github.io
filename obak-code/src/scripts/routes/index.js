
const routes = {
    menus: [
        // 菜单相关路由
        { key: '/destiny/home', title: '首页', icon: 'home', component: 'Home' },
        {
            key: '/destiny/worksheet',  
            title: '工作单',
            icon: 'edit',
            subs: [
                { key: '/destiny/worksheet/rawoutorder', title: '原料出库单', component: 'RawOutputOrder' },
                { key: '/destiny/worksheet/rawwareorder', title: '原料入库单', component: 'RawWarehouseOrder' },
                { key: '/destiny/worksheet/rawout', title: '原料出库', component: 'RawOutput' },
                { key: '/destiny/worksheet/rawware', title: '原料入库', component: 'RawWarehouse' },
                { key: '/destiny/worksheet/ripeoutorder', title: '成品出库单', component: 'RipeOutputOrder' },
                { key: '/destiny/worksheet/ripewareorder', title: '成品入库单', component: 'RipeWarehouseOrder' },
                { key: '/destiny/worksheet/ripeout', title: '成品出库', component: 'RipeOutput' },
                { key: '/destiny/worksheet/ripeware', title: '成品入库', component: 'RipeWarehouse' },
                { key: '/destiny/worksheet/offer', title: '报价单', component: 'Offer' },
                { key: '/destiny/worksheet/task', title: '任务单', component: 'Task' }
            ],
        },
        {
            key: '/destiny/repertory',
            title: '库存',
            icon: 'wallet',
            subs: [
                {
                    key: '/destiny/repertory/raw',
                    title: '原料库存记录',
                    component: 'Raw',
                },
                {
                    key: '/destiny/repertory/ripe',
                    title: '成品库存记录',
                    component: 'Ripe',
                },
            ],
        },
        {
            key: '/destiny/report',
            title: '报表',
            icon: 'copy',
            subs: [
                { key: '/destiny/report/daily', title: '日报表', component: 'Daily' },
                { key: '/destiny/report/weekly', title: '周报表', component: 'Weekly' },
                {
                    key: '/destiny/report/summary',
                    title: '总报表',
                    component: 'Summary',
                },
            ],
        },
        {key: '/destiny/linkman', title: '联系人', icon: 'user',  component: 'LinkMan' }
    ],
    others: [], // 非菜单相关路由
};

export default routes;
