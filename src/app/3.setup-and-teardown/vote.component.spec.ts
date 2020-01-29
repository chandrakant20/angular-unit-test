import { voteComponet } from "./vote.component";

describe("voteComponent", () => {
  let component: voteComponet;

  beforeEach(() => {
    // arrenge
    component = new voteComponet();
  });

  afterEach(() => {});

  it("should incremet total when upvoted", () => {
    // act
    component.upVote();
    // assert
    expect(component.totalVotes).toBe(1);
  });

  it("should decrement total when upvoted", () => {
    component.downVote();

    expect(component.totalVotes).toBe(-1);
  });
});
