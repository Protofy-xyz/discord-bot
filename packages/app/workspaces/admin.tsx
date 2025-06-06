import {
    Router,
    Key,
    Cog,
    Database,
    Boxes,
    Box,
    LayoutDashboard,
    Zap,
    Wrench
} from '@tamagui/lucide-icons'
import { MonitorCog as RawMonitorCog } from 'lucide-react'
import { styled } from 'tamagui'
const MonitorCog = styled(RawMonitorCog, {
    name: 'MonitorCog',
    size: '$true',
    color: 'currentColor',
  }
)
import {
    ServiceMemoryUsageChart,
    TotalMemoryUsage,
    TotalCPUUsage,
    TotalUsers,
    LastEvents,
    ListPages,
    TotalObjects,
    ListLatestUsers,
    TotalGroups,
    ListGroups,
    TotalEvents
} from '../bundles/widgets'


const enableBoards = true
const enableArduinos = false   

export default ({ pages, boards, objects }) => {
    const adminPages = pages.filter(p => p.pageType == 'admin' && !p.object)
    const objectsWithPage = objects ? objects.filter(o => o?.features?.adminPage) : []

    const integrations = [
        { "name": "Automations", "icon": Zap, "href": "/workspace/apis" },
        { "name": "Devices", "icon": Router, "href": "/workspace/devices" },
        { "name": "Objects", "icon": Boxes, "href": "/workspace/objects" },
        { "name": "Pages", "icon": "layout", "href": "/workspace/pages" }
    ]
    enableArduinos? integrations.push({ "name": "Arduinos", "icon": Router, "href": "/workspace/arduinos" }):null

    return {
        "default": "/workspace/",
        "label": "Admin panel",
        "assistant": true,
        "logs": true,
        "dashboards": [{
            "name": "Dashboard",
            "content": [
                { key: 'servicememorychart', content: <ServiceMemoryUsageChart title="Memory Usage" id={'servicememorychart'} /> },
                { key: 'totalmemory', content: <TotalMemoryUsage title='Total Memory Usage' id={'totalmemory'} /> },
                { key: 'totalcpu', content: <TotalCPUUsage title='Total CPU Usage' id={'totalcpu'} /> },
                { key: 'totalusers', content: <TotalUsers title='Total users' id={'totalusers'} /> },
                { key: 'lastevents', content: <LastEvents title='Last Events' id={'lastevents'} /> },
                { key: 'listpages', content: <ListPages title='Pages' id={'listpages'} /> },
                {key: 'listgroups', content: <ListGroups title='Groups' id={'listgroups'} />},
                { key: 'totalobjects', content: <TotalObjects title='Total objects' id={'totalobjects'} /> },
                { key: 'listlatestusers', content: <ListLatestUsers title='Latest Users' id={'listlatestusers'} /> },
                { key: 'totalgroups', content: <TotalGroups title='Total groups' id={'totalgroups'} /> },
                { key: 'totalevents', content: <TotalEvents title='Total events' id={'totalevents'} /> },
                //     { key: 'f', content: <DashboardCard title='Box C' id={'totalusers'}>
                //     <Text style={{ flex: 1, width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                //         <Image url="/images/protofito.png" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                //     </Text>
                // </DashboardCard>},
            ],
            "layout": {
                "lg": [
                    { "i": "totalcpu", "x": 0, "y": 0, "w": 3, "h": 6, "isResizable": true },
                    { "i": "totalmemory", "x": 3, "y": 0, "w": 3, "h": 6, "isResizable": true },
                    { "i": "totalusers", "x": 6, "y": 0, "w": 2, "h": 6, "isResizable": true },
                    { "i": "listlatestusers", "x": 9, "y": 0, "w": 4, "h": 6, "isResizable": true },
                    { "i": "servicememorychart", "x": 0, "y": 6, "w": 6, "h": 14, "isResizable": true },
                    { "i": "lastevents", "x": 6, "y": 6, "w": 6, "h": 14, "isResizable": true },
                    { "i": "totalgroups", "x": 0, "y": 20, "w": 2, "h": 6, "isResizable": true },
                    { "i": "listgroups", "x": 2, "y": 20, "w": 3, "h": 6, "isResizable": true },
                    { "i": "totalevents", "x": 5, "y": 20, "w": 2, "h": 6, "isResizable": true },
                    { "i": "totalobjects", "x": 7, "y": 20, "w": 2, "h": 6, "isResizable": true },
                    { "i": "listpages", "x": 9, "y": 20, "w": 3, "h": 6, "isResizable": true }
                ],
                "md": [
                    { "i": "totalcpu", "x": 0, "y": 0, "w": 3, "h": 6, "isResizable": true },
                    { "i": "totalmemory", "x": 3, "y": 0, "w": 4, "h": 6, "isResizable": true },
                    { "i": "totalusers", "x": 7, "y": 0, "w": 3, "h": 6, "isResizable": true },
                    { "i": "listlatestusers", "x": 0, "y": 6, "w": 12, "h": 6, "isResizable": true },
                    { "i": "servicememorychart", "x": 0, "y": 12, "w": 12, "h": 12, "isResizable": true },
                    { "i": "lastevents", "x": 0, "y": 24, "w": 12, "h": 12, "isResizable": true },
                    { "i": "totalgroups", "x": 0, "y": 36, "w": 3, "h": 6, "isResizable": true },
                    { "i": "listgroups", "x": 3, "y": 36, "w": 6, "h": 6, "isResizable": true },
                    { "i": "totalevents", "x": 9, "y": 36, "w": 3, "h": 6, "isResizable": true },
                    { "i": "totalobjects", "x": 0, "y": 42, "w": 3, "h": 6, "isResizable": true },
                    { "i": "listpages", "x": 3, "y": 42, "w": 9, "h": 6, "isResizable": true }
                ],
                "sm": [
                    { "i": "totalcpu", "x": 0, "y": 0, "w": 6, "h": 6, "isResizable": true },
                    { "i": "totalmemory", "x": 0, "y": 6, "w": 6, "h": 6, "isResizable": true },
                    { "i": "totalusers", "x": 0, "y": 12, "w": 6, "h": 6, "isResizable": true },
                    { "i": "listlatestusers", "x": 0, "y": 18, "w": 6, "h": 6, "isResizable": true },
                    { "i": "servicememorychart", "x": 0, "y": 24, "w": 6, "h": 12, "isResizable": true },
                    { "i": "lastevents", "x": 0, "y": 36, "w": 6, "h": 12, "isResizable": true },
                    { "i": "totalgroups", "x": 0, "y": 48, "w": 6, "h": 6, "isResizable": true },
                    { "i": "listgroups", "x": 0, "y": 54, "w": 6, "h": 6, "isResizable": true },
                    { "i": "totalevents", "x": 0, "y": 60, "w": 6, "h": 6, "isResizable": true },
                    { "i": "totalobjects", "x": 0, "y": 66, "w": 6, "h": 6, "isResizable": true },
                    { "i": "listpages", "x": 0, "y": 72, "w": 6, "h": 6, "isResizable": true }
                ]
            },
            "label": "Dashboard"
        }],
        "menu": {
            ...(enableBoards) ? {
                "Boards": [{ "name": "System", "icon": LayoutDashboard, "href": "/workspace/dashboard" }].concat((boards ? boards.map((board) => {
                    return { "name": board.name.charAt(0).toUpperCase() + board.name.slice(1), "icon": LayoutDashboard, "href": '/workspace/boards/view?board='+board.name }
                }) : []).concat([{ "name": "Manage Boards", "icon": MonitorCog, "href": '/workspace/boards' }]))
            } : {},
            ...(objectsWithPage.length ? {
                "Objects": objectsWithPage.map((obj) => {
                    return { "name": obj.name.charAt(0).toUpperCase() + obj.name.slice(1), "icon": Box, "href": (obj.dynamic?'/workspace/':'/admin/')+obj.features.adminPage }
                })
            } : {}),
            ...(adminPages.length ? {
                "Administration": adminPages.map((page) => {
                    return { "name": page.name.charAt(0).toUpperCase() + page.name.slice(1), "icon": Wrench, "href": page.route }
                })
            } : {}),
            "Integrations": integrations,
            "System": [
                { "name": "Users", "icon": "users", "href": "/workspace/users" },
                { "name": "Keys", "icon": Key, "href": "/workspace/keys" },
                { "name": "Events", "icon": "activity", "href": "/workspace/events" },
                { "name": "Services", "icon": Cog, "href": "/workspace/services" },
                { "name": "Databases", "icon": Database, "type": "databases", "path": "/system" },
                { "name": "Files", "icon": "folder", "href": "/workspace/files?path=/", "path": "" }
            ],

        }
    }
}
