// import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const userState = atomWithStorage<Partial<LoginRes>>("user", {});

