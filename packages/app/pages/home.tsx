import { Page } from "protolib/components/Page";
import { Text } from "protolib/components/Text";
import { Pressable } from "protolib/components/Pressable";
import { Icon } from "protolib/components/Icon";
import VStack from "protolib/components/VStack";
import HStack from "protolib/components/HStack";
import Image from "protolib/components/Image";
import { useComposedState } from "protolib/lib/useComposedState";
import { DefaultLayout } from "../layout/DefaultLayout";
import { Protofy } from "protobase";
import { context } from "../bundles/uiContext";
import { useRouter } from "solito/navigation";

const Home = ({ currentView, setCurrentView, props }: any) => {
  const { cs, states } = useComposedState();

  const router = useRouter();
  context.onRender(async () => { });
  return (
    <Page height="99vh">
      <DefaultLayout footer={<></>}>
        <VStack height="100%" alignItems="center" padding="$10">
          <Image url="/images/protofito.png" width="280px" height="200px"></Image>
          <VStack width="100%" margin="$6" alignItems="center">
            <Text fontSize="50px" fontWeight="600" textAlign="center">
              Welcome to Protofy
            </Text>
            <Text fontSize="30px" fontWeight="600" textAlign="center">
              AI-Driven Machine Automation Platform
            </Text>
            <Text fontSize="20px" fontWeight="300" textAlign="center" marginTop="$2">
              Natural Language Autopilot system for smart and industrial devices
            </Text>

          </VStack>
          <HStack gap="$6" margin="$6" flexWrap="wrap" justifyContent="center">
            <Pressable onPress={(e) => context.navigate("/workspace/pages", router)} width="300px" padding="$5" theme="green">
              <HStack gap="$2">
                <Text fontWeight="600" fontSize="18px">
                  CMS
                </Text>
                <Icon name="ArrowRight" size="20px"></Icon>
              </HStack>
              <Text fontWeight="200">Manage the contents of your project. Automations, devices and many others.</Text>
            </Pressable>
            <Pressable onPress={(e) => context.navigate("https://github.com/Protofy-xyz/Protofy/blob/main/docs/getting-started.md", router)} width="300px" padding="$5" theme="blue">
              <HStack gap="$2">
                <Text fontWeight="600" fontSize="18px">
                  Getting started
                </Text>
                <Icon name="ArrowRight" size="20px"></Icon>
              </HStack>
              <Text fontWeight="200">Find detailed information about Protofy features, examples and more.</Text>
            </Pressable>
            <Pressable onPress={(e) => context.navigate("https://discord.com/invite/VpeZxMFfYW", router)} width="300px" padding="$5" theme="purple">
              <HStack gap="$2">
                <Text fontWeight="600" fontSize="18px">
                  Discord
                </Text>
                <Icon name="ArrowRight" size="20px"></Icon>
              </HStack>
              <Text fontWeight="200">Communicate your doubts and be the first to know about updates</Text>
            </Pressable>
          </HStack>
        </VStack>
      </DefaultLayout>
    </Page>
  );
};

export default {
  route: Protofy("route", "/"),
  component: (props) => <Home {...props} />
};
