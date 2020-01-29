export class voteComponet{
    totalVotes =0;

    upVote(){
        this.totalVotes++;
    }
    downVote(){
        this.totalVotes--;
    }
}