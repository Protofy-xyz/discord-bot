/* @my/ui is wrapper for tamagui. Any component in tamagui can be imported through @my/ui
use result = await API.get(url) or result = await API.post(url, data) to send requests
API.get/API.post will return a PendingResult, with properties like isLoaded, isError and a .data property with the result
if you call paginated apis, you will need to wait for result.isLoaded and look into result.data.items, since result.data is an object with the pagination.
Paginated apis return an object like: {"itemsPerPage": 25, "items": [...], "total": 20, "page": 0, "pages": 1}
*/

import React, { useState } from 'react'
import { withSession } from 'protolib/lib/Session';
import { Page } from 'protolib/components/Page';
import { API, Protofy } from 'protobase';
import { useComposedState } from 'protolib/lib/useComposedState';
import { Text } from 'protolib/components/Text';
import { Center } from 'protolib/components/Center';
import { DefaultLayout } from '../layout/DefaultLayout'
import { context } from '../bundles/uiContext';
import { useRouter } from 'solito/navigation';
import { Objects } from '../bundles/objects';


const isProtected = Protofy("protected", {{protected}})
const permissions = isProtected?Protofy("permissions", {{{permissions}}}):null

Protofy("pageType", "blank")

const PageComponent = ({ currentView, setCurrentView, ...props }: any) => {
    const { cs, states } = useComposedState();

    const router = useRouter();
    context.onRender(() => {

    });
    return (
        <Page height="99vh">
            <Center>
            </Center>
        </Page>
    )
}

export default {
    route: Protofy("route", "{{route}}"),
    component: (props) => <PageComponent {...props} />
}