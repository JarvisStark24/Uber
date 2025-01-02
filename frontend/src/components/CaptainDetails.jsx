/* eslint-disable no-unused-vars */
import React from "react";

const CaptainDetails = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start gap-3">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAvgMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAABAAIDBAUGB//EADwQAAEDAgQDBQUFBgcAAAAAAAEAAgMEEQUSITEGQVETFCJhcYGRobHBByMyQmIkJTNSovAVFjRDZLLh/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAECAwQF/8QAHhEBAAMAAwEBAQEAAAAAAAAAAAECEQMhMRJRQQT/2gAMAwEAAhEDEQA/AOgypwan2RAQMDUQ1PARAQMypZVJZKyBgallTw1G1kDMqNk+yWVAzKhlTi4bBTRsB1JVdT8oA1KyviFrhrl9U19IfylTpijlSyqZ7C02I1TbKUI8qGVS2QsgjyoFqlshZBEWoZVKQhZBCWoFl1NlQsgfZGyKICAAJJ1glYIBZGyNkUDbIgJ1krIBZVKypEd2NO26uhc/iVS1s8rnODWNuXO6AKtp6XpHa7DNze8KYYhTtGkmbyaLrHoGitla+oJLdMsfIDz6rr6FgijAaxoHIALnty5OQ6K8GxssxmLUrdHFzR5tI+av0tXDMLwyNcPJy0MzAAHNvflZV6zCqSpb2kbe7VA2miGU38+RHqkcv6TwR+lNE2ZugsQqD2FjiCNUyirpIKs4fiB+/AvFINpG9R9QrlbrI13ULes65rVmJ7VLJWT0ldUwhNIUiBCBlkLKSyBCCOyFk+yVkARCSQ3QOCIQRQJOsgEUCSRCKBjtGk9ASvP8SrO81zKTNmzOMrwOYGw99l6BIC5jmjctK8ywWJ7+Lqx0wcMsBY0EaA3VOTqNacUbbEFRJiTKhz21jYObRfYLoOF+JsRo5hDiMpmB2u1XYOGmyyulBa4vaWuDhfRDFKJlO+nzhpLLMFhbwg7Lmm0TGO6tJiddXi2JyUlIyoiY3O5l232XGs4hx+qkcZKuFsTTswWLV3c0UdbSNhe1rmujA1WbFwvDmk7SKK77BzsupA2+QWdZhaYZmITVNRgMlbUtb3qh+/ZIzZ7QPF7wtqmqRW4fTVDXZg5u/uVbiSlbTcO1dNADd8LmNG+6zuCHP/y7BG8EZBYX9FvwduX/AER420E8oWXS5TUkbJFA1BOQQNSRKSBiNkrJIDdFNTkBCKARQEIoBFAlzfEtPFTV1FXMa1jnvLJC0b3GhPuXSrn+OPDgck1xaItdr5FVtG1acdvm2rOFVYMW9ysbG8VpY8VjFTcQtLbEbed1zD+IZGQDsCbHVxbv6JuWtxEhzqaWQcgW6rkinb0Ivvj1eHGKCompoaR5e9zb5mC7W26lasdXdz2OtmbzHNePQUWMsfG6OkqLsdfM1u3ktigx2uhxRkNcZWFhzSB41y2VZrnid67dhiVVG/FKOmcQbuc8tvvlGnxUkMUcETY4WNYxosGtFgFylDWd/wCLWvDhaKMt35ldfyXTw1yuuLnttgslZJJbOcEE4hBA2yVkUCgaUkUEDAkmohA5FNRCBwRTQiEBCcmpyA3AaSSAALknkFxPHfEOEzYZNRR1LpJjqOxAtceeyj+0XG30tC6Jri2J2mhsXFebYRAats+IVRzMj0Y07F3mpwiU2HTgOaM2gOmntXVUWI1mVopw7Nb8Y00XFZXRiKUMLWvHhPJaFHib4Y9L3HQrntDqpfHo9DidZDTd4qartADq3NqCuX4oxbvU5mht2mSxPULClxWV7bAkDnrf+91ZwjCazHKgQ0zT4jcvOzR6qkUydlpbk+oyHTfZvE5z5cQmJMY3Ntt7H5r0aKRkjA6Nwc06iyy+GcGZhDzTMcH5KdrJTbRziSdR6Ee9YHE0GIcJVHf8PLpsIe8Z4/zUx9ebTf2Lq442rh5JmL47ZBZnD+Mw43SGWEguG4BWmpmMRE6R2QRSKhJpQKKBQBBFIoILo3QCSB+6ITLp10DkU0JyAps7ssD3bWaU5UsWeWUn6S6xUx2OO+0PBajFKGmqKTKWxu+95kA6A256rn6HCDDgxpWuzOuXF3Uld9RVppz2c2jTs/l6FXn4TRVTu2Y0RyHdzdj6ha/LL6eV4LGJKR9DVMuYXlpBHt+q0WcOU7y1waS06ArrqnhJzcRNbTBrmSx2kDf5hsf76KXC6J8NZ3SZuh1aSuO+1l38c1tDJwrguifIHyNB8jqu3ioqbCaAvjja1rB4Wgbnop6elZTkXblsq75xiGJBjB+z0p1/U/8A8+qzrE3nF7Wikadhn4SXm73HMT5lSYkI5qWaGYBzHsLXA6ghGJobIbDS6dUQCSB4cTd2jbL0IiIjHmTabTsvL/swilpeM6+hic7urGF9v5dbD5r1GZuR5asvhbh+LABWVVQ9r6ipfme4fkbybf4rWfmlu8jKTyKraFqyhSKJBG6bdZtCTSigUASKSSCukm3RBQPSCF0QgeEQmhMdJaZjL6k6qYjSZxOL8lTr8NjrmFkxLgdgToFdc/sZGMdoHC4Kna27lrWuMbW1w1bhmJYXmfC/vEN/4cpuR6FS4ZicILWvL6d19WE6H6LsqmBr2eIArEqsJpZ+0ilia4EdNloonoalpxCbM7tAImFrh5k3v8FsdgyYNkZbO3Z1tQVxuH4PNQ0tWynmks8N7PxXLbG+l1dwLEqiKQtqagv/AC2eADf3KtqxMdpraaz0nxuoxwTNp45ofHtJHHYtHmDf4LVwqmNPThpu4i1y4+Jx5kqrUVk8kr5I6Rz3Bu5IAAC57Fm4vXFjZqh8EDv9qB2UH1O5+SpXjivi9uSbeuznno6UOfUzsjAFyM2qz/8AHRU+HD6WWQcnvbkHx1+Cgo8EpomRExNJaxovufNbEcMbAA1oHorqaip2TyWfUuu7cNGwVlrfJHZHYXQMdEHbqu9hYbFXY/EdEpow9h68lS0L1tnTPKanuBBIIsQmLJqSCKBQVLogpl04FA9EFMCddAKiXsoXPG40ChkvHLTO5cz1KhxM5hFHyL0KGdtZRtY43kilynqLLeletY3nvGnjTC+g7Ru7BcWUmE1AqqWOQG+YJ0jO2opYjqcpssbgqoL6OaIm5hmc30V1HRv6Ki5t6ojq1X5fD7VTterJ/SoShotZXsPUhPkw2kltI6Px3vduhUVObYtUM/QH+9WoCXOsUQsRxhlO7Tc2WVjIAMAbpmdb3rbl0Y0eV1i4v4qrD2jnOPhqg0wPEByClUY11T0DuiT9G2QbqUpdlCQgdbMTyCljOaL2qlK/s4ZT0Cs0x/Z2jmbJMCOrjszOOuqqLUe3O10fULLWNoyW1Z2ASSKCqsoX1TrqK6cHIJQU4FRgo3sCiJ8VsQ/jwrNw2Xu2OzRE2ZKM/t2+q1MYBa2GXodVhYrlp8RoqpwvFIezf01XXEdObXZwTASZS4X+awOGYzS8Q4/SWs1tS17fRzGu+qp8Qzz4bQGbOXQ6Oim/NGejuo81awSq71xA+Y2zy0MLn26+IKqXWy6sBVSM/fFW5DeG/QKnFvdBBEP33UO/4zPm5WoAO2OirQa4tUu6RRj/ALFXoR4/agsVP4W+ixcQ8WIYeOkrj/SVr1R0WNUH95UXq8/0lQlqsOikGyhYdE8FSJG/iSlSYi7W6gVKpmenlaOYCs0hu1vkoJ7CF9+g+aZhU/bPJ5AlENCQ2mus+qblndbmbq7KfGqtb+JjuoVL+NKeqyQSQWTVl3RBSSQSNKeNQkkrV9RbyQrgJMMdmWBiUbZ+GpzJqYwHtPQhJJdLlPqnGs4QcajxZoMx9bKHhkkcVSMH4RRRgBJJQtDvpf8ATlVIUklAr05/eNWfNg+Cv05u8JJKJElVsseXXFKfyZJ8kklJLRYfkpAUUkSkj3TJXEHRJJQK1Y49xmPMBVeEnF9NmdqblJJT/Ef1qSE5yoqz+FGUklS3i9fVVBJJYtn/2Q=="
            alt="Drive image"
          />
          <h4 className="text-lg font-medium">Samrat Driver</h4>
        </div>
        <div>
          <h4 className="text-lg font-semibold">₹400</h4>
          <p className="text-sm text-gray-600">Earned</p>
        </div>
      </div>
      <div
        className="flex justify-center mt-8 gap-5 p-3 bg-gray-100 rounded-xl 
        items-center"
      >
        <div className="text-center">
          <i className="text-3xl m-2 font-extralight ri-timer-2-line"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
        <div className="text-center">
          <i className="text-3xl m-2 font-extralight ri-speed-up-fill"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
        <div className="text-center">
          <i className="text-3xl m-2 font-extralight ri-booklet-line"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
      </div>
    </div>
  );
};

export default CaptainDetails;
