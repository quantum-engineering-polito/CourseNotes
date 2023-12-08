---
draft: true
---


- Frequency $$\nu = \frac{c}{\lambda}$$
- Photon energy $$E = h \nu = \hbar \omega \quad (\omega = 2 \pi \nu)$$
- Photon momentum $$p = \frac{h}{\lambda} = \hbar k$$
- Plane wave $$e^{ i(kx - \omega t) }$$
- Schrödinger Equation $$-\frac{\hbar^{2}}{2m} \frac{ \partial \Psi(x,t) }{ \partial x^{2} } + U(x) \Psi(x,t) = i \hbar \frac{ \partial \Psi(x,t) }{ \partial t }$$
- Schrödinger Equation as an operator $$ \left( - \frac{\hbar^{2}}{2m \partial_{x}^{2} + U(x) - i \hbar \partial_{t}} \right) \Psi(x,t) = 0$$
- Probability that a particle is between $a$ and $b$ $$P = \int_{a}^{b} |\Psi(x,t)|^{2} \, dx $$
- Expectation $$\braket{ f(x) } = \int |\Psi(x,t)^{2}| f(x)\, dx  = \int \Psi ^{*} (x,t) ~ f(x) ~ \Psi(x,t) \, dx $$
- Uncertainty $$\Delta f \triangleq \sqrt{ \braket{ f^{2} }  - \braket{ f } ^{2} }$$
- Fourier transform  $$ f(x) = \frac{1}{\sqrt{ 2 \pi }} \int_{-\infty}^{+\infty} dk \, \tilde{f} (k) e^{ ikx }  $$
- Inverse Fourier transform $$ \tilde{f}(k) = \frac{1}{\sqrt{ 2 \pi }} \int_{-\infty}^{+\infty} dx \, f(x) e^{ -ikx }  $$
- Momentum in configuration space $$ \hat{p} = -i \hbar \partial_{x}$$
- Kinetic energy in configuration space $$ \hat{K} = -\frac{ \hbar^{2}\partial_{x} ^{2}}{ 2m} $$
- Commutator $$ [\hat{A}, \hat{B}] \triangleq \hat{A}\hat{B} - \hat{B}\hat{A} $$
- Heisenberg uncertainty relation $$ \Delta x ~ \Delta p \geq \frac{\hbar}{2} $$
- Hamiltonian $$ \hat{H} \equiv - \frac{\hbar^{2}}{2m} \partial_{x} ^{2} + U(x) $$
- Probability wave energy $$ \hat{E}_{w} = i \hbar \partial_{t}  $$
- Schrödinger Equation (alternative form) $$ (i \hbar \partial_{t} - \hat{H}) \Psi = 0 $$
- Time independent SE $$ \hat{H} \Psi(\{x_{i}\}) = E \Psi (\{x_{i}\}) $$
- Dirac notation $$\displaylines{
 \bra{f} = \begin{pmatrix}
f_{1}^{*} & f_{2}^{*} & \dots
\end{pmatrix} \\
\ket{f} = \begin{pmatrix}
f_{1} \\ f_{2} \\ \vdots
\end{pmatrix} } $$
- Inner product $$\displaylines{
 f \cdot g = \sum_{i} f^{*}_{i} g_{i} \quad f \equiv \begin{bmatrix}
f_{1} \\ f_{2} \\ \vdots \\ f_{N}
\end{bmatrix} \\ 
f \cdot g \equiv \braket{ f|g } 
}$$
- Outer product
- Square integrable function $$ \braket{ f | f } = 1  $$
- In Hilbert space the inner product of any two vectors (functions) always exists since it's bounded from above by the **Schwartz equation**: $$ |\braket{ f | g } |^{2} \leq \braket{ f | f } \braket{ g | g }  $$
- Orthogonal vectors $$ f \text{ and } g \text{ are orthogonal} \iff f \cdot g = 0  $$
- Orthonormal vectors  $$ \braket{ f_{n} | f_{m} } = \delta_{nm} \quad \text{(orthogonal and normalized)} $$
- Complete set of vectors $$ \sum_{n} \ket{f_{n}}  \bra{f_{n}} = \boldsymbol{I}$$