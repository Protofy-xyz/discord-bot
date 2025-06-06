import { UsersAPI } from './users/usersAPI'
import { EventsAPI } from './events/eventsAPI'
import { GroupsAPI } from './groups/groupsAPI'
import { ObjectsAPI } from './objects/objectsAPI'
import { PagesAPI } from './pages/pagesAPI'
import { KeysAPI } from './keys/keysAPI'
import { APIsAPI } from './apis/api'
import { DevicesAPI } from './devices/devices/devicesAPI'
import { WledAPI } from './wled/api/wledApi'
import { DeviceSdksAPI } from './devices/deviceSdks/deviceSdksAPI'
import { DeviceCoresAPI } from './devices/devicecores/devicecoresAPI'
import { DeviceBoardsAPI } from './devices/deviceBoards/deviceBoardsAPI'
import { DeviceDefinitionsAPI } from './devices/deviceDefinitions/deviceDefinitionsAPI'
import { DatabasesAPI } from './databases/databasesAPI'
import { WorkspacesAPI } from './workspaces/workspacesAPI'
import { ResourcesAPI } from './resources/resourcesAPI'
import { AssistantAPI } from './assistant/assistantAPI';
import { MasksAPI } from './visualui/masksAPI';
import { LogsAPI } from './logs/logsAPI'
import { ServicesAPI } from './services/servicesAPI'
import { TokensAPI } from './tokens/tokensAPI'
import { StateMachinesDefinitionsApi } from './stateMachines/stateMachineDefinitions/stateMachineDefinitionApi'
import { PackagesAPI } from './packages/packagesAPI'
import { FlowAPI } from './flow/flowAPI';
import { AgentsAPI } from './agents/agents/agentsApi'
import { ChatbotsAPI } from './chatbots/chatbotsAPI'
import { AutomationsAPI } from './automations/automationsAPI'
import { BoardsAPI } from './boards/boardsAPI'
import { CardsAPI } from './cards/cardsAPI'
import { IconsAPI } from './icons/iconsAPI'
import { ProtoMemDBAPI } from './protomemdb/protomemdbAPI'
import { VisionAPI } from './vision/visionAPI'
import { MobileAPI } from './mobile/mobileAPI'
import { WhatsappAPI } from './whatsapp/whatsappAPI'
import { SequencesAPI } from './sequences/sequencesAPI'
import { ArduinosAPI } from './arduino/arduinosAPI'

export const AdminAPIBundles = (app, context) => {
  EventsAPI(app, context)
  ProtoMemDBAPI(app, context, true)
  AutomationsAPI(app, context)
  BoardsAPI(app, context)
  CardsAPI(app, context)
  UsersAPI(app, context)
  GroupsAPI(app, context)
  ObjectsAPI(app, context)
  KeysAPI(app, context)
  PagesAPI(app, context)
  APIsAPI(app, context)
  DevicesAPI(app, context)
  WledAPI(app, context)
  AgentsAPI(app, context)
  DeviceSdksAPI(app, context)
  DeviceCoresAPI(app, context)
  DeviceBoardsAPI(app, context)
  DeviceDefinitionsAPI(app, context)
  DatabasesAPI(app, context)
  WorkspacesAPI(app, context)
  ResourcesAPI(app, context)
  AssistantAPI(app, context)
  MasksAPI(app, context)
  LogsAPI(app, context)
  ServicesAPI(app, context)
  TokensAPI(app, context)
  PackagesAPI(app, context)
  StateMachinesDefinitionsApi(app, context)
  FlowAPI(app, context)
  ChatbotsAPI(app, context)
  IconsAPI(app, context)
  VisionAPI(app, context)
  MobileAPI(app, context)
  WhatsappAPI(app, context)
  SequencesAPI(app, context)
  ArduinosAPI(app, context)
}