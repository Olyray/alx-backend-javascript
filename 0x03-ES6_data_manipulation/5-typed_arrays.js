export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const rightBuffer = new DataView(new ArrayBuffer(length), 0, length);
  rightBuffer.setInt8(position, value);
  return rightBuffer;
}
