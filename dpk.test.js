const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });


  it("Returns generated trivial key when event is passed without partition key", () => {
    const inputEvent = {
      ID: 2
    }
    const expectedOutput = "ffcb63431813949a9f7524f179805aa89f377d69de8fa59c15183bc1564c9a226bc705e1e3ad758a875b463e93de696f4e4d7621da30a533fff545a5c80618bf";

    const trivialKey = deterministicPartitionKey(inputEvent);
    expect(trivialKey).toBe(expectedOutput);
  });

  it("Returns the given partition key as trivial key when event is passed with valid partition key", () => {
    const inputEvent = {
      partitionKey: "1234ffcb63431813949a9f7524f179805aa89f377d69de8fa59c15183bc1564c9a226bc705e1e3ad758a875b463e93de696f4e4d7621da30a533fff545a5c80618bf1234ffcb63431813949a9f7524f179805aa89f377d69de8fa59c15183bc1564c9a226bc705e1e3ad758a875b463e93de696f4e4d7621da30a533fff545ab"
    }
    const expectedOutput = "1234ffcb63431813949a9f7524f179805aa89f377d69de8fa59c15183bc1564c9a226bc705e1e3ad758a875b463e93de696f4e4d7621da30a533fff545a5c80618bf1234ffcb63431813949a9f7524f179805aa89f377d69de8fa59c15183bc1564c9a226bc705e1e3ad758a875b463e93de696f4e4d7621da30a533fff545ab";
    
    const trivialKey = deterministicPartitionKey(inputEvent);
    expect(trivialKey).toBe(expectedOutput);
  });

  it("Returns stringified form of given partition key as trivial key when event is passed with partition key which is not a string", () => {
    const inputEvent = {
      partitionKey: 1234,
    }
    const expectedOutput = "1234";

    const trivialKey = deterministicPartitionKey(inputEvent);
    expect(trivialKey).toBe(expectedOutput);
  });

  it("Returns generated trivial key when event is passed with partition key which has length more than 256", () => {
    const key = "1234ffcb63431813949a9f7524f179805aa89f377d69de8fa59c15183bc1564c9a226bc705e1e3ad758a875b463e93de696f4e4d7621da30a533fff545a5c80618bf1234ffcb63431813949a9f7524f179805aa89f377d69de8fa59c15183bc1564c9a226bc705e1e3ad758a875b463e93de696f4e4d7621da30a533fff545aba";
    const inputEvent = {
      partitionKey: key,
    }
    const expectedOutput = "26a56911932c720a65726a204d6856e59f10dae6a8c5db0181e405592776fd94f7cddbbd243b628ff96ef51f9b8658fd1832e7e877b1ef621982609e69a82382";

    const trivialKey = deterministicPartitionKey(inputEvent);
    expect(trivialKey).toBe(expectedOutput);
  });
});
