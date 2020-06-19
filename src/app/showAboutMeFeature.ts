import { AppConfigurationClient } from "@azure/app-configuration";

export async function ShowAboutMe() {
    const client = new AppConfigurationClient('AZ_CONFIG_CONNECTION');

    console.log(client.listConfigurationSettings());

    var val = await client.getConfigurationSetting({ key: 'ShowAboutMe' });

    console.log(val);

    return val;
}