import ky, { KyInstance } from "ky";
import { getConfig } from "./config";
import { CONFIG_KEYS, REST_ENDPOINTS_KEYS } from "./constants";
import { SetActivity } from "@xhayper/discord-rpc";

interface RestOptions {
    url?: string;
    key?: string;
}

export class RestClient {
    constructor() {
        this.createRestClient();
    }

    get canSend(): boolean {
        const options = this.getOptions();
        return (
            options.url !== undefined &&
            options.url.length !== 0 &&
            options.key !== undefined &&
            options.key.length !== 0
        );
    }

    private getOptions(): RestOptions {
        const url = getConfig().get(CONFIG_KEYS.Rest.Url);
        const key = getConfig().get(CONFIG_KEYS.Rest.Key);

        return {
            url,
            key
        };
    }

    private createRestClient(): KyInstance | undefined {
        if (!this.canSend) {
            return;
        }

        const { url: restUrl, key: restKey } = this.getOptions();

        return ky.create({
            prefixUrl: restUrl,
            headers: {
                Authorization: `Bearer ${restKey}`
            }
        });
    }

    async send(activity: SetActivity): Promise<void> {
        const client = this.createRestClient();
        if (!client) {
            return;
        }

        return void client.post(REST_ENDPOINTS_KEYS.activity, { json: activity });
    }
}
