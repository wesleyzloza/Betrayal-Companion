import { describe, it, expect } from "vite-plus/test";
import { getHaunt } from "@/api";

describe("API", () => {
  it("Can correctly get haunt.", () => {
    const haunt = getHaunt("abandoned_room", "bite", "2");
    expect(haunt?.hauntNumber).toBe(18);
    console.log(haunt);
  });
});
