import { UserModel } from './users/usersSchemas'
import { GroupModel } from './groups/groupsSchemas'
import { KeyModel} from './keys/keysSchemas'
import { EventModel } from 'protobase'
import { ObjectModel } from './objects/objectsSchemas'
import { WorkspaceModel } from './workspaces/WorkspaceModel'
import { APIModel } from './apis/APISchemas'
import { PageModel } from './pages/pagesSchemas'
import { TokenModel } from './tokens/tokensSchemas'
import { BoardModel } from './boards/boardsSchemas'

export default {
    event: EventModel,
    user: UserModel,
    group: GroupModel,
    object: ObjectModel,
    key: KeyModel,
    workspace: WorkspaceModel,
    api: APIModel,
    page: PageModel,
    token: TokenModel,
    board: BoardModel
}