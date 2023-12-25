import Vue from "vue";
import { mapMutations } from "vuex";
import qs from "qs";

const STRAPI_URL = process.env.strapiUrl;
const STRAPI_API_TOCKEN_SALT = process.env.strabiTockenApiSalt;

const strapi = {
    methods: {
        async fetchData(type = "info") {
            const infoQuery = qs.stringify(
                {
                    populate: ["socialMedia", "infos", "infos.action"],
                },
                {
                    encodeValuesOnly: true,
                }
            );

            const url = `${STRAPI_URL}/${type}?${
                type === "info" ? infoQuery : ""
            }`;

            try {
                const response = await fetch(url, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                        Authorization: `Bearer ${STRAPI_API_TOCKEN_SALT}`,
                    },
                });

                if (!response.ok) {
                    throw new Error(type + " network response was not ok");
                }

                const { data } = await response.json();
                this.setData({ type, data: data.attributes || data });

                return data; // You might want to return data instead of 'result'
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        },
        populateData() {
            // this.fetchData();
            // this.fetchData("tags");
        },
        ...mapMutations({
            setData: "setData",
            // setIsDataLoaded: "setIsDataLoaded",
        }),
    },
};

Vue.mixin(strapi);
